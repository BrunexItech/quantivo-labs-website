export const API_BASE = import.meta.env.VITE_API_URL || 'http://38.242.200.152:8009/api';

export const api = {
  // Products
  getProducts: (params: string = '') => 
    fetch(`${API_BASE}/products/${params}`).then(res => res.json()),
  
  getProduct: (slug: string) => 
    fetch(`${API_BASE}/products/${slug}/`).then(res => res.json()),
  
  // Services
  getServices: () => 
    fetch(`${API_BASE}/services/`).then(res => res.json()),
  
  getService: (slug: string) => 
    fetch(`${API_BASE}/services/${slug}/`).then(res => res.json()),
  
  // Blog
  getBlogPosts: (params: string = '') => 
    fetch(`${API_BASE}/blog/${params}`).then(res => res.json()),
  
  getBlogPost: (slug: string) => 
    fetch(`${API_BASE}/blog/${slug}/`).then(res => res.json()),
  
  // Portfolio
  getPortfolio: () => 
    fetch(`${API_BASE}/portfolio/`).then(res => res.json()),
  
  // Testimonials
  getTestimonials: () => 
    fetch(`${API_BASE}/testimonials/`).then(res => res.json()),
  
  // Partners
  getPartners: (type?: string) => {
    const url = type ? `${API_BASE}/partners/?type=${type}` : `${API_BASE}/partners/`;
    return fetch(url).then(res => res.json());
  },
  
  // Industries
  getIndustries: () => 
    fetch(`${API_BASE}/industries/`).then(res => res.json()),
  
  // Contact
  sendContact: (data: {
    name: string;
    email: string;
    phone?: string;
    product?: string;
    message: string;
  }) => 
    fetch(`${API_BASE}/contact/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json()),
};