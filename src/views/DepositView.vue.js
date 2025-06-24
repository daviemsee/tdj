import { ref, onMounted } from 'vue';
import { auth, database } from '@/firebase';
import { ref as dbRef, get } from 'firebase/database';
const balance = ref(0);
const depositAmount = ref('');
const presets = [100, 500, 2900, 8000, 10000, 23000, 65000, 100000];
const paymentMethods = [
    { name: 'jypay', sub: 'jypay' },
    { name: 'ycpay', sub: 'ycpay' },
    { name: 'inpay', sub: 'inpay' },
    { name: 'wkpay', sub: 'wkpay' }
];
onMounted(async () => {
    const userId = auth.currentUser?.uid;
    if (userId) {
        const snapshot = await get(dbRef(database, 'users/' + userId + '/balance'));
        if (snapshot.exists()) {
            balance.value = snapshot.val();
        }
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['amount']} */ ;
/** @type {__VLS_StyleScopedClasses['preset-buttons']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "phone-frame" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "balance" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "amount" },
});
(__VLS_ctx.balance);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "number",
    placeholder: "Enter amount",
});
(__VLS_ctx.depositAmount);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "preset-buttons" },
});
for (const [preset] of __VLS_getVForSourceType((__VLS_ctx.presets))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.depositAmount = preset;
            } },
        key: (preset),
    });
    (preset);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "payment-methods" },
});
for (const [method] of __VLS_getVForSourceType((__VLS_ctx.paymentMethods))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "method" },
        key: (method.name),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "icon" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "details" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (method.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "sub" },
    });
    (method.sub);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "notice" },
});
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['balance']} */ ;
/** @type {__VLS_StyleScopedClasses['amount']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['preset-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['payment-methods']} */ ;
/** @type {__VLS_StyleScopedClasses['method']} */ ;
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
/** @type {__VLS_StyleScopedClasses['details']} */ ;
/** @type {__VLS_StyleScopedClasses['sub']} */ ;
/** @type {__VLS_StyleScopedClasses['notice']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            balance: balance,
            depositAmount: depositAmount,
            presets: presets,
            paymentMethods: paymentMethods,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
