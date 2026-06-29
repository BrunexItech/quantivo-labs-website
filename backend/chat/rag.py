import os
from langchain_community.document_loaders import PyPDFLoader
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings.fastembed import FastEmbedEmbeddings
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()

# Knowledge base path
KB_PATH = Path(__file__).parent / "knowledge_base.pdf"

# Load PDF
if KB_PATH.exists():
    loader = PyPDFLoader(str(KB_PATH))
    documents = loader.load()
    
    # Split text
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = text_splitter.split_documents(documents)
    
    # Create vector store
    embeddings = FastEmbedEmbeddings(model_name="BAAI/bge-small-en-v1.5")
    vector_store = Chroma.from_documents(docs, embeddings)
else:
    vector_store = None


def get_response(query: str) -> str:
    """Get AI response based on query"""
    
    if not vector_store:
        return "I'm sorry, our knowledge base is currently unavailable. Please give us a moment — a Quantivo Labs representative will reach out to you within a few minutes to assist you further."
    
    # Retrieve context
    results = vector_store.similarity_search(query, k=3)
    context = '\n\n'.join([doc.page_content for doc in results])
    
    # Generate response with Groq
    llm = ChatGroq(
        model="llama-3.3-70b-versatile",
        api_key=os.getenv("GROQ_API_KEY"),
        temperature=0.3
    )
    
    prompt = f"""
You are a warm, professional, and helpful assistant for Quantivo Labs, an AI-first technology company based in Nairobi, Kenya.

Your goal is to provide clear, accurate, and human-sounding answers. Follow these rules:

1. ONLY use the information provided in the Context section below.
2. If the Context does NOT contain the answer, politely say:
   "I'm sorry, I don't have that information right now. Please give us a moment — a Quantivo Labs representative will reach out to you within a few minutes to assist you further."
3. NEVER make up information, guess, or hallucinate.
4. When listing products, services, features, or any items:
   - Use numbered lists (1., 2., 3.) for ordered items
   - Use bullet points (-) for unordered items
   - Do NOT use markdown formatting like **bold**, *italics*, or underscores
5. Keep your tone friendly, respectful, and professional.
6. Keep responses clear and concise — avoid overly long paragraphs.

Context:
{context}

Question: {query}

Answer:"""
    
    response = llm.invoke(prompt)
    return response.content