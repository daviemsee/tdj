import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getDoc, doc } from 'firebase/firestore';
import { database as db } from '@/firebase';
import { getAuth } from 'firebase/auth';
const router = useRouter();
const auth = getAuth();
const currentUser = auth.currentUser;
const userData = reactive({
    userId: '',
    creditScore: 0,
    level: '',
    title: '',
    effectiveDate: '',
    walletBalance: 0
});
const fetchUserData = async () => {
    if (!currentUser) {
        router.push('/');
        return;
    }
    const uid = currentUser.uid;
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
        const data = userSnap.data();
        userData.userId = data.userId;
        userData.creditScore = data.creditScore || 0;
        userData.level = data.level;
        userData.title = data.userTitle || '';
        userData.effectiveDate = data.effectiveDate || '';
        userData.walletBalance = data.walletBalance || 0;
    }
    else {
        console.log('No user data found.');
    }
};
const handleOption = async (text) => {
    if (text === 'Log Out') {
        await auth.signOut();
        router.push('/');
    }
    else {
        alert(`${text} clicked`);
    }
};
const menuItems = [
    { text: 'Settings' },
    { text: 'Financial Records' },
    { text: 'Transaction Records' },
    { text: 'Download App' },
    { text: 'Lucky Wheel' },
    { text: 'Message' },
    { text: 'Invite' },
    { text: 'Language' },
    { text: 'Log Out' }
];
onMounted(() => {
    fetchUserData();
});
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
    ...{ class: "mine-page" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "profile-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "avatar" },
    src: "https://via.placeholder.com/80",
    alt: "User Avatar",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "user-id" },
});
(__VLS_ctx.userData.userId);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "credit-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
(__VLS_ctx.userData.creditScore);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.userData.level);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "user-level" },
});
(__VLS_ctx.userData.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "wallet-section" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
(__VLS_ctx.userData.walletBalance.toFixed(2));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "package-info" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.userData.level);
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.userData.effectiveDate);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "options-list" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.handleOption(item.text);
            } },
        key: (item.text),
        ...{ class: "option-item" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (item.text);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
}
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['mine-page']} */ ;
/** @type {__VLS_StyleScopedClasses['profile-section']} */ ;
/** @type {__VLS_StyleScopedClasses['avatar']} */ ;
/** @type {__VLS_StyleScopedClasses['user-id']} */ ;
/** @type {__VLS_StyleScopedClasses['credit-info']} */ ;
/** @type {__VLS_StyleScopedClasses['user-level']} */ ;
/** @type {__VLS_StyleScopedClasses['wallet-section']} */ ;
/** @type {__VLS_StyleScopedClasses['package-info']} */ ;
/** @type {__VLS_StyleScopedClasses['options-list']} */ ;
/** @type {__VLS_StyleScopedClasses['option-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            userData: userData,
            handleOption: handleOption,
            menuItems: menuItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
