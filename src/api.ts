export const API_BASE = import.meta.env.VITE_API_URL || 'http://38.242.200.152:8009';

export const api = {
  // Products
  getProducts: (params: string = '') => 
    fetch(`${API_BASE}/products/products/${params}`).then(res => res.json()),
  
  getProduct: (slug: string) => 
    fetch(`${API_BASE}/products/products/${slug}/`).then(res => res.json()),
  
  // Categories
  getCategories: () => 
    fetch(`${API_BASE}/products/categories/`).then(res => res.json()),
  
  // Services - keep as is
  getServices: () => 
    fetch(`${API_BASE}/api/services/`).then(res => res.json()),
  
  getService: (slug: string) => 
    fetch(`${API_BASE}/api/services/${slug}/`).then(res => res.json()),
  
  // Blog - keep as is
  getBlogPosts: (params: string = '') => 
    fetch(`${API_BASE}/api/blog/${params}`).then(res => res.json()),
  
  getBlogPost: (slug: string) => 
    fetch(`${API_BASE}/api/blog/${slug}/`).then(res => res.json()),
  
  // Portfolio - keep as is
  getPortfolio: () => 
    fetch(`${API_BASE}/api/portfolio/`).then(res => res.json()),
  
  // Testimonials - keep as is
  getTestimonials: () => 
    fetch(`${API_BASE}/api/testimonials/`).then(res => res.json()),
  
  // Partners - keep as is
  getPartners: (type?: string) => {
    const url = type ? `${API_BASE}/api/partners/?type=${type}` : `${API_BASE}/api/partners/`;
    return fetch(url).then(res => res.json());
  },
  
  // Industries - keep as is
  getIndustries: () => 
    fetch(`${API_BASE}/api/industries/`).then(res => res.json()),
  
  // Contact - keep as is
  sendContact: (data: {
    name: string;
    email: string;
    phone?: string;
    product?: string;
    message: string;
  }) => 
    fetch(`${API_BASE}/api/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
};