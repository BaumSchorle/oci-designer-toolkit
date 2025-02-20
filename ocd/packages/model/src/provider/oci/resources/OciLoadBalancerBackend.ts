/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign.js"
import * as AutoGenerated from "./generated/OciLoadBalancerBackend.js"

export interface OciLoadBalancerBackend extends AutoGenerated.OciLoadBalancerBackend {}

export namespace OciLoadBalancerBackend {
    
    export function newResource(type?: string): OciLoadBalancerBackend {
        const resource = {
            ...AutoGenerated.OciLoadBalancerBackend.newResource('load_balancer_backend'),
        }
        return resource
    }
    export function cloneResource(resource: OciLoadBalancerBackend, type?: string): OciLoadBalancerBackend {
        return AutoGenerated.OciLoadBalancerBackend.cloneResource(resource, 'load_balancer_backend') as OciLoadBalancerBackend
    }
    export function allowedParentTypes(): string[] {
        return ['LoadBalancerBackendSet']
    }
    export function getParentId(resource: OciLoadBalancerBackend): string {
        const parentId = resource.backendSetId !== '' ? resource.backendSetId : resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciLoadBalancerBackend, parentId: string): OciLoadBalancerBackend {
        resource.backendSetId = parentId
        return resource
    }
    export function getConnectionIds(resource: OciLoadBalancerBackend, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciLoadBalancerBackendClient extends AutoGenerated.OciLoadBalancerBackendClient {
    static new(): OciLoadBalancerBackend {
        return OciLoadBalancerBackend.newResource()
    }
    static clone(resource: OciLoadBalancerBackend): OciLoadBalancerBackend {
        return OciLoadBalancerBackend.cloneResource(resource)
    }
}

export default OciLoadBalancerBackendClient
