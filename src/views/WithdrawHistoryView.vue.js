import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { ref as dbRef, onValue } from "firebase/database";
import { database, auth } from '@/firebase';
const router = useRouter();
const withdrawals = ref([]);
const fetchWithdrawals = () => {
    const userId = auth.currentUser?.uid;
    if (!userId)
        return;
    const userWithdrawalsRef = dbRef(database, `withdrawals/${userId}`);
    onValue(userWithdrawalsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            withdrawals.value = Object.values(data);
        }
        else {
            withdrawals.value = [];
        }
    });
};
const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};
const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString();
};
const goBack = () => {
    router.push('/withdraw');
};
onMounted(fetchWithdrawals);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "phone-frame" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top-banner" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ onClick: (__VLS_ctx.goBack) },
    ...{ class: "back-icon" },
});
if (__VLS_ctx.withdrawals.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "history-list" },
    });
    for (const [withdrawal, index] of __VLS_getVForSourceType((__VLS_ctx.withdrawals))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (index),
            ...{ class: "history-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (withdrawal.amount);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (withdrawal.status);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.formatDate(withdrawal.timestamp));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
        (__VLS_ctx.formatTime(withdrawal.timestamp));
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "no-records" },
    });
}
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['top-banner']} */ ;
/** @type {__VLS_StyleScopedClasses['back-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['history-list']} */ ;
/** @type {__VLS_StyleScopedClasses['history-item']} */ ;
/** @type {__VLS_StyleScopedClasses['no-records']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            withdrawals: withdrawals,
            formatDate: formatDate,
            formatTime: formatTime,
            goBack: goBack,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
