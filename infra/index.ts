import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const subscriptionId = "be04e777-42ad-46b3-b592-efc468e08696";
const resourceGroupName = "rg-wiam-arezqi-at-bordeaux-inp-fr";

const resourceGroup = azure_native.resources.ResourceGroup.get(
    resourceGroupName,
    `/subscriptions/${subscriptionId}/resourceGroups/${resourceGroupName}`
);

const staticSite = new azure_native.web.StaticSite("swa-wiam-vue-2048-preprod", {
    resourceGroupName: resourceGroup.name,
    repositoryUrl: "",
    sku: {
        name: "Free",
        tier: "Free",
    },
    tags: {
        Class: "EI8IT213",
    },
});

const secrets = azure_native.web.listStaticSiteSecretsOutput({
    name: staticSite.name,
    resourceGroupName: resourceGroup.name,
});

export const hostname = staticSite.defaultHostname;
export const deploymentToken = pulumi.secret(secrets.properties.apiKey);