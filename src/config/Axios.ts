import axios from 'axios';

const PER_PAGE = 20;
const BASE_URL = 'https://api.github.com/repos/facebook/react-native/';
const TIME_OUT = 3000;

enum Request {
  Issues = 'issues',
}

export interface IssueData {
  data: Issue[];
}

export interface Issue {
  id: number;
  state: string;
  title: string;
  body: string;
  created_at: string;
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

export const getIssues = (page: number) => axiosInstance.get(Request.Issues, { params: { page, per_page: PER_PAGE } });
