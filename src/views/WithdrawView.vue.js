import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ref as dbRef, push, set } from "firebase/database";
import { database, auth } from '@/firebase';
const router = useRouter();
const amounts = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
const selectedAmount = ref(null);
const password = ref('');
const showPassword = ref(false);
const statusMessage = ref('');
const selectAmount = (amount) => {
    selectedAmount.value = amount;
};
const togglePassword = () => {
    showPassword.value = !showPassword.value;
};
const submitWithdrawal = async () => {
    if (!selectedAmount.value) {
        statusMessage.value = 'Please select an amount.';
        return;
    }
    if (!/^\d{6}$/.test(password.value)) {
        statusMessage.value = 'Transaction password must be exactly 6 digits.';
        return;
    }
    const userId = auth.currentUser.uid;
    try {
        const newRef = push(dbRef(database, `withdrawals/${userId}`));
        await set(newRef, {
            amount: selectedAmount.value,
            status: 'Processing',
            timestamp: Date.now()
        });
        statusMessage.value = 'Successful withdrawal request sent...';
        setTimeout(() => {
            statusMessage.value = '';
        }, 2000);
    }
    catch (error) {
        statusMessage.value = 'Error processing withdrawal.';
        console.error(error);
    }
};
const goToHistory = () => {
    router.push('/withdraw-history');
};
const goBack = () => {
    router.push('/dashboard');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['amount-options']} */ ;
/** @type {__VLS_StyleScopedClasses['amount-options']} */ ;
/** @type {__VLS_StyleScopedClasses['password-input']} */ ;
/** @type {__VLS_StyleScopedClasses['password-wrapper']} */ ;
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ onClick: (__VLS_ctx.goToHistory) },
    ...{ class: "history-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "content-area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "amount-options" },
});
for (const [option] of __VLS_getVForSourceType((__VLS_ctx.amounts))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectAmount(option);
            } },
        key: (option),
        ...{ class: ({ selected: __VLS_ctx.selectedAmount === option }) },
    });
    (option);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "password-input" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "fundPassword",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "password-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    id: "fundPassword",
    type: (__VLS_ctx.showPassword ? 'text' : 'password'),
    maxlength: "6",
    inputmode: "numeric",
    pattern: "\u005c\u0064\u002a",
    placeholder: "Enter 6-digit password",
});
(__VLS_ctx.password);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ onClick: (__VLS_ctx.togglePassword) },
    ...{ class: "eye-icon" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.submitWithdrawal) },
    ...{ class: "submit-btn" },
});
if (__VLS_ctx.statusMessage) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "status" },
    });
    (__VLS_ctx.statusMessage);
}
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['top-banner']} */ ;
/** @type {__VLS_StyleScopedClasses['back-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['history-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['content-area']} */ ;
/** @type {__VLS_StyleScopedClasses['amount-options']} */ ;
/** @type {__VLS_StyleScopedClasses['selected']} */ ;
/** @type {__VLS_StyleScopedClasses['password-input']} */ ;
/** @type {__VLS_StyleScopedClasses['password-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['eye-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['submit-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['status']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            amounts: amounts,
            selectedAmount: selectedAmount,
            password: password,
            showPassword: showPassword,
            statusMessage: statusMessage,
            selectAmount: selectAmount,
            togglePassword: togglePassword,
            submitWithdrawal: submitWithdrawal,
            goToHistory: goToHistory,
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
