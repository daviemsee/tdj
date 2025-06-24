import { ref } from 'vue';
import { auth } from '@/firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
const phone = ref('');
const otp = ref('');
const confirmationResult = ref(null);
const message = ref('');
const step = ref(1); // 1: enter phone, 2: enter OTP
// Initialize recaptcha verifier once component is mounted
const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: () => {
                // reCAPTCHA solved - will proceed with submit
            }
        }, auth);
    }
};
const sendOtp = async () => {
    message.value = '';
    setupRecaptcha();
    try {
        confirmationResult.value = await signInWithPhoneNumber(auth, phone.value, window.recaptchaVerifier);
        step.value = 2;
        message.value = 'OTP sent! Check your phone.';
    }
    catch (e) {
        message.value = 'Failed to send OTP: ' + e.message;
    }
};
const verifyOtp = async () => {
    try {
        await confirmationResult.value.confirm(otp.value);
        message.value = 'Phone number verified successfully!';
        // You can redirect or update UI here
    }
    catch (e) {
        message.value = 'Invalid OTP, try again.';
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
if (__VLS_ctx.step === 1) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "tel",
        placeholder: "+1234567890",
    });
    (__VLS_ctx.phone);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.sendOtp) },
    });
}
if (__VLS_ctx.step === 2) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: (__VLS_ctx.otp),
        type: "text",
        placeholder: "Enter OTP",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.verifyOtp) },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "recaptcha-container",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.message);
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            phone: phone,
            otp: otp,
            message: message,
            step: step,
            sendOtp: sendOtp,
            verifyOtp: verifyOtp,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
