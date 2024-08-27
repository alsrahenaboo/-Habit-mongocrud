import axios from "axios";

// تحديد عنوان الـ API الأساسي
const API_URL = "http://localhost:5000/api/habits";

// جلب جميع العادات
export const getHabits = () => {
  return axios.get(API_URL);
};

// إنشاء عادة جديدة
export const createHabit = (habit) => {
  return axios.post(API_URL, habit);
};

// جلب عادة واحدة بناءً على معرفها
export const getHabit = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateHabit = (id, habit) => {
  return axios.put(`${API_URL}/${id}`, habit);
};

export const deleteHabit = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
