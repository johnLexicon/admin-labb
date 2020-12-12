<template>
    <div v-if="errorMessage" class="alert alert-danger fade" role="alert">
        <slot></slot>
    </div>
</template>