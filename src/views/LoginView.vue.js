import { ref, watchEffect } from 'vue';
import { auth, database } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref as dbRef, get, child, set } from 'firebase/database';
const phone = ref('');
const password = ref('');
const repeatPassword = ref('');
const isLogin = ref(true);
const showPassword = ref(false);
const showRepeatPassword = ref(false);
const errorMessage = ref('');
const referralCode = ref('Loading...');
const toggleMode = async () => {
    isLogin.value = !isLogin.value;
    errorMessage.value = '';
    if (!isLogin.value) {
        // Generate next referral code only for registration
        const snapshot = await get(child(dbRef(database), 'users'));
        const userCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
        referralCode.value = `TDJ${(userCount + 1).toString().padStart(3, '0')}`;
    }
};
const handleAction = async () => {
    errorMessage.value = '';
    if (!/^\d{10}$/.test(phone.value)) {
        errorMessage.value = 'Phone must be exactly 10 digits.';
        return;
    }
    if (!/^\d{6}$/.test(password.value)) {
        errorMessage.value = 'Password must be exactly 6 digits.';
        return;
    }
    const email = `${phone.value}@tdj.com`;
    if (isLogin.value) {
        // LOGIN
        try {
            await signInWithEmailAndPassword(auth, email, password.value);
            alert('Login successful!');
            window.location.href = '/dashboard';
        }
        catch (error) {
            errorMessage.value = error.message;
        }
    }
    else {
        if (password.value !== repeatPassword.value) {
            errorMessage.value = 'Passwords do not match.';
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password.value);
            // Save to DB
            const userId = auth.currentUser.uid;
            await set(dbRef(database, 'users/' + userId), {
                phone: phone.value,
                referralCode: referralCode.value
            });
            alert(`Registered! Your referral code is ${referralCode.value}`);
            window.location.href = '/dashboard';
        }
        catch (error) {
            errorMessage.value = error.message;
        }
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "phone-frame" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.isLogin ? 'Login' : 'Register');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    maxlength: "10",
    placeholder: "e.g. 0712345678",
});
(__VLS_ctx.phone);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-group toggle-password" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: (__VLS_ctx.showPassword ? 'text' : 'password'),
    maxlength: "6",
    placeholder: "6-digit password",
});
(__VLS_ctx.password);
__VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showPassword = !__VLS_ctx.showPassword;
        } },
});
if (!__VLS_ctx.isLogin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "input-group toggle-password" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: (__VLS_ctx.showRepeatPassword ? 'text' : 'password'),
        maxlength: "6",
        placeholder: "Repeat password",
    });
    (__VLS_ctx.repeatPassword);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ onClick: (...[$event]) => {
                if (!(!__VLS_ctx.isLogin))
                    return;
                __VLS_ctx.showRepeatPassword = !__VLS_ctx.showRepeatPassword;
            } },
    });
}
if (!__VLS_ctx.isLogin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "input-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        value: (__VLS_ctx.referralCode),
        disabled: true,
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.handleAction) },
});
(__VLS_ctx.isLogin ? 'Login' : 'Register');
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "error" },
});
(__VLS_ctx.errorMessage);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ onClick: (__VLS_ctx.toggleMode) },
    ...{ class: "toggle-link" },
});
(__VLS_ctx.isLogin ? 'No account? Register here' : 'Already have an account? Login here');
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['input-group']} */ ;
/** @type {__VLS_StyleScopedClasses['error']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            phone: phone,
            password: password,
            repeatPassword: repeatPassword,
            isLogin: isLogin,
            showPassword: showPassword,
            showRepeatPassword: showRepeatPassword,
            errorMessage: errorMessage,
            referralCode: referralCode,
            toggleMode: toggleMode,
            handleAction: handleAction,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
