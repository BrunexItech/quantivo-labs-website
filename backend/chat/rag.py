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
        return "Knowledge base not loaded. Please contact support."
    
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
You are a helpful assistant for Quantivo Labs, an AI-first technology company.
Use the context below to answer the question accurately.
If you don't know the answer, say "I don't have that information. Please contact us at info@quantivolabs.tech"

Context:
{context}

Question: {query}
Answer:"""
    
    response = llm.invoke(prompt)
    return response.content