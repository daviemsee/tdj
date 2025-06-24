import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, database as db } from '../firebase'; // Adjust path if needed
const router = useRouter();
const step = ref(1);
const form = ref({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    referralCode: '',
});
function nextStep() {
    if (step.value < 3) {
        step.value++;
    }
    else {
        registerUser();
    }
}
async function registerUser() {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, form.value.email, form.value.password);
        const user = userCredential.user;
        // ✅ Save user details to Firestore
        await setDoc(doc(db, 'users', user.uid), {
            userId: form.value.phone, // 👈 phone stored as userId for MineView
            fullName: form.value.fullName,
            email: form.value.email,
            referralCode: form.value.referralCode,
            creditScore: 0,
            level: 'Intern',
            userTitle: 'New User',
            effectiveDate: new Date().toISOString(),
            walletBalance: 0
        });
        console.log('User registered and data saved to Firestore!');
        router.push('/dashboard'); // redirect to dashboard after registration
    }
    catch (error) {
        alert(error.message);
        console.error('Registration error:', error);
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "register" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.step);
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.nextStep) },
});
if (__VLS_ctx.step === 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        placeholder: "Full Name",
        required: true,
    });
    (__VLS_ctx.form.fullName);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        placeholder: "Email",
        required: true,
        type: "email",
    });
    (__VLS_ctx.form.email);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        placeholder: "Password",
        required: true,
        type: "password",
    });
    (__VLS_ctx.form.password);
}
if (__VLS_ctx.step === 2) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        placeholder: "Phone Number",
        required: true,
    });
    (__VLS_ctx.form.phone);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        placeholder: "Referral Code (optional)",
    });
    (__VLS_ctx.form.referralCode);
}
if (__VLS_ctx.step === 3) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.form.fullName);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.form.email);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.form.phone);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
(__VLS_ctx.step < 3 ? 'Next' : 'Submit');
/** @type {__VLS_StyleScopedClasses['register']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            step: step,
            form: form,
            nextStep: nextStep,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
