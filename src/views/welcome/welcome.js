import {inject, bindable} from 'aurelia-framework';
import {DynamicViewLoader, listTemplate1, populateTemplate, GroupWorker} from 'pragma-views';

import {staffOrderGroupItems} from './../../resources/staff-grouping';
import {staffMembers}  from './../../resources/staff-data';

/**
 * TODO:
 * 1. add items for master list
 * 1. add items for detail list
 */

@inject(Element, DynamicViewLoader, GroupWorker)
export class Welcome {
    /**
     * Property holding the view loader
     */
    dynamicViewLoader;

    /**
     * Property holding the group worker that is used by the master list container
     */
    groupWorker;

    /**
     * Record id of the resource we are working with e.g. workorder id, staff id...
     * When this is set, it kicks off a process to fetch the model, see function selectedIdChanged
     */@bindable selectedId;

    /**
     * Options used on the master list drop down menu
     */
    @bindable masterListOptions;

    /**
     * Options used in the details drop down menu
     */
    @bindable detailOptions;

    /**
     * What items are allowed for grouping
     */
    @bindable groupingOrder;

    /**
     * template to use in the master list container
     */
    @bindable listTemplate;

    /**
     * Id to use when usign cache
     */
    @bindable cacheId;

    /**
     * Model representing selected staff member
     */
    @bindable model;

    /**
     * Determine if the master list is visible or not
     */
    @bindable isMasterVisible;

    /**
     * constructor
     * @param element: DOMElement
     * @param dynamicViewLoader: DynamicViewLoader
     * @param groupWorker: GroupWorker
     */
    constructor(element, dynamicViewLoader, groupWorker) {
        this.element = element;
        this.dynamicViewLoader = dynamicViewLoader;
        this.groupWorker = groupWorker;
        this.groupingOrder = staffOrderGroupItems;
        this.cacheId = "temp-cache";
        this.isMasterVisible = true;
        this.listTemplate = populateTemplate(listTemplate1, {
            "__field1__": "${id}",
            "__field2__": "",
            "__field3__": "${firstName}",
            "__field4__": "${lastName}",
            "__field5__": "${jobTitle}"
        });
    }

    /**
     * Aurelia life cycle event
     */
    attached() {
        this.groupWorker.createCache(this.cacheId, staffMembers);
    }

    /**
     * Aurelia life cycle event
     */
    detached() {
        this.groupWorker.disposeCache(this.cacheId);
    }
}