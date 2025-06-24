import { ref } from 'vue';
const tasks = ref([
    { title: 'Task 1 - Install', unlocked: true, completed: false },
    { title: 'Task 2 - Install', unlocked: false, completed: false },
    { title: 'Task 3 - Install', unlocked: false, completed: false }
]);
const totalEarnings = ref(0);
const taskReward = 50;
function startTask(index) {
    if (!tasks.value[index].unlocked || tasks.value[index].completed)
        return;
    tasks.value[index].title = `Task ${index + 1} - Installing...`;
    setTimeout(() => {
        tasks.value[index].title = `Task ${index + 1} - Completed!`;
        tasks.value[index].completed = true;
        totalEarnings.value += taskReward;
        if (index + 1 < tasks.value.length) {
            tasks.value[index + 1].unlocked = true;
        }
        else {
            alert(`All Intern tasks completed! Total Earned: KES ${totalEarnings.value}`);
        }
    }, 5000);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "phone-frame" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "top-banner" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "content-area" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "earnings-box" },
});
(__VLS_ctx.totalEarnings);
for (const [task, index] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.startTask(index);
            } },
        key: (index),
        ...{ class: (['task', { locked: !task.unlocked, completed: task.completed }]) },
    });
    (task.title);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bottom-nav" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$router.push('/dashboard');
        } },
    ...{ class: "nav-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-item" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "nav-item" },
});
/** @type {__VLS_StyleScopedClasses['phone-frame']} */ ;
/** @type {__VLS_StyleScopedClasses['top-banner']} */ ;
/** @type {__VLS_StyleScopedClasses['content-area']} */ ;
/** @type {__VLS_StyleScopedClasses['earnings-box']} */ ;
/** @type {__VLS_StyleScopedClasses['locked']} */ ;
/** @type {__VLS_StyleScopedClasses['completed']} */ ;
/** @type {__VLS_StyleScopedClasses['task']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-nav']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-item']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            tasks: tasks,
            totalEarnings: totalEarnings,
            startTask: startTask,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
