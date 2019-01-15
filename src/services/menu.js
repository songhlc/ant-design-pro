import request from '@/utils/request';

export async function query () {
  return request('/workbench/appmenumgr/sidebarList?r=' + Math.random());
}
