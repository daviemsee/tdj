import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import DashboardView from '@/views/DashboardView.vue';
import WithdrawView from '@/views/WithdrawView.vue';
import WithdrawHistoryView from '@/views/WithdrawHistoryView.vue';
import AdminView from '@/views/AdminView.vue';
import DepositView from '@/views/DepositView.vue';
import MineView from '@/views/MineView.vue'; // ✅ Import MineView
const routes = [
    { path: '/', name: 'Login', component: LoginView },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView },
    { path: '/withdraw', name: 'Withdraw', component: WithdrawView },
    { path: '/withdraw-history', name: 'WithdrawHistory', component: WithdrawHistoryView },
    { path: '/admin', name: 'Admin', component: AdminView },
    { path: '/deposit', name: 'Deposit', component: DepositView },
    { path: '/mine', name: 'Mine', component: MineView } // ✅ Added Mine route
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});
export default router;
