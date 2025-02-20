/*
** Copyright (c) 2020, 2024, Oracle and/or its affiliates.
** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
*/

import { OcdResources } from "../../../OcdDesign.js"
import * as AutoGenerated from "./generated/OciGroup.js"

export interface OciGroup extends AutoGenerated.OciGroup {}

export namespace OciGroup {
    
    export function newResource(type?: string): OciGroup {
        const resource = {
            ...AutoGenerated.OciGroup.newResource('group'),
        }
        return resource
    }
    export function cloneResource(resource: OciGroup, type?: string): OciGroup {
        return AutoGenerated.OciGroup.cloneResource(resource, 'group') as OciGroup
    }
    export function allowedParentTypes(): string[] {
        return []
    }
    export function getParentId(resource: OciGroup): string {
        const parentId = resource.compartmentId
        return parentId
    }
    export function setParentId(resource: OciGroup, parentId: string): OciGroup {
        return resource
    }
    export function getConnectionIds(resource: OciGroup, allResources: OcdResources): string[] {
        // This List of Ids does not include the Parent Id or Compartment Id
        let associationIds: string[] = []
        return associationIds
    }
}

export class OciGroupClient extends AutoGenerated.OciGroupClient {
    static new(): OciGroup {
        return OciGroup.newResource()
    }
    static clone(resource: OciGroup): OciGroup {
        return OciGroup.cloneResource(resource)
    }
}

export default OciGroupClient
