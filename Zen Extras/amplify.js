import Amplify from "aws-amplify";

import "@aws-amplify/ui-vue";
// import { Auth } from '@aws-amplify/auth';
// import { defineNuxtPlugin } from '#app';
// import { useRuntimeConfig } from '#imports';

// The following seems to be the old way of importing Vue Compoents in AWS Amplify
// import { AmplifyPlugin } from 'aws-amplify-vue';


// Amplify docs mention the following for a Vue Project:
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

import awsExports from "@/aws-exports";


export default defineNuxtPlugin(() => {
    // const config = useRuntimeConfig();


    Amplify.configure(awsExports);


});