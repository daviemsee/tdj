import { ref } from 'vue';
const isLogin = ref(true);
const loginPhone = ref('');
const loginPassword = ref('');
const rememberMeLogin = ref(false);
const showLoginPass = ref(false);
const regPhone = ref('');
const regPassword = ref('');
const repeatPassword = ref('');
const rememberMeReg = ref(false);
const showRegPass = ref(false);
const showRepeatPass = ref(false);
const toggleForm = () => { isLogin.value = !isLogin.value; };
const validateLogin = () => {
    if (!/^\d{10}$/.test(loginPhone.value))
        return alert('Phone must be 10 digits!');
    if (!/^\d{6}$/.test(loginPassword.value))
        return alert('Password must be 6 digits!');
    alert('Login success! (simulated)');
};
const validateRegister = () => {
    if (!/^\d{10}$/.test(regPhone.value))
        return alert('Phone must be 10 digits!');
    if (regPassword.value !== repeatPassword.value)
        return alert('Passwords do not match!');
    if (!/^\d{6}$/.test(regPassword.value))
        return alert('Password must be 6 digits!');
    alert('Registration success! (simulated)');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-group']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "phone-frame" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
(__VLS_ctx.isLogin ? 'Login' : 'Register');
if (__VLS_ctx.isLogin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.validateLogin) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "text",
        value: (__VLS_ctx.loginPhone),
        maxlength: "10",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-group toggle-password" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: (__VLS_ctx.showLoginPass ? 'text' : 'password'),
        maxlength: "6",
        required: true,
    });
    (__VLS_ctx.loginPassword);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.isLogin))
                    return;
                __VLS_ctx.showLoginPass = !__VLS_ctx.showLoginPass;
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "checkbox-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "checkbox",
    });
    (__VLS_ctx.rememberMeLogin);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: "submit",
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.validateRegister) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "text",
        value: (__VLS_ctx.regPhone),
        maxlength: "10",
        required: true,
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-group toggle-password" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: (__VLS_ctx.showRegPass ? 'text' : 'password'),
        maxlength: "6",
        required: true,
    });
    (__VLS_ctx.regPassword);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.isLogin))
                    return;
                __VLS_ctx.showRegPass = !__VLS_ctx.showRegPass;
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "form-group toggle-password" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: (__VLS_ctx.showRepeatPass ? 'text' : 'password'),
        maxlength: "6",
        required: true,
    });
    (__VLS_ctx.repeatPassword);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.i, __VLS_intrinsicElements.i)({
        ...{ onClick: (...[$event]) => {
                if (!!(__VLS_ctx.isLogin))
                    return;
                __VLS_ctx.showRepeatPass = !__VLS_ctx.showRepeatPass;
            } },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "checkbox-group" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "checkbox",
    });
    (__VLS_ctx.rememberMeReg);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "referral-note" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: "submit",
    });
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.toggleForm) },
    ...{ class: "toggle-link" },
});
(__VLS_ctx.isLogin ? "Don't have an account? Register here" : "Already have an account? Login here");
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-password']} */ ;
/** @type {__VLS_StyleScopedClasses['checkbox-group']} */ ;
/** @type {__VLS_StyleScopedClasses['referral-note']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-link']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            isLogin: isLogin,
            loginPhone: loginPhone,
            loginPassword: loginPassword,
            rememberMeLogin: rememberMeLogin,
            showLoginPass: showLoginPass,
            regPhone: regPhone,
            regPassword: regPassword,
            repeatPassword: repeatPassword,
            rememberMeReg: rememberMeReg,
            showRegPass: showRegPass,
            showRepeatPass: showRepeatPass,
            toggleForm: toggleForm,
            validateLogin: validateLogin,
            validateRegister: validateRegister,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
