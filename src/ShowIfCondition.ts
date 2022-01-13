import { Component, IComponentBindings, ComponentOptions, IFieldConditionOption, IQueryResult } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';
import { FieldsEvaluator } from './FieldEvaluator';

export interface IShowIfConditionOptions {
    conditions: IFieldConditionOption[];
}


@lazyComponent
export class ShowIfCondition extends Component {
    static ID = 'ShowIfCondition';
    static options: IShowIfConditionOptions = {
        /**
         * A field-based condition that must be satisfied by the query result item for the component to be rendered.
         *
         * Note: This option uses a distinctive markup configuration syntax allowing multiple conditions to be expressed. Its underlying logic is the same as that of the field value conditions mechanism used by result templates.
         *
         * **Examples:**
         * Render the component if the query result item's @documenttype field value is Article or Documentation.
         * ```html
         * <div class="CoveoFieldValue" data-field="@author" data-condition-field-documenttype="Article, Documentation"></div>
         * ```
         * Render the component if the query result item's @documenttype field value is anything but Case.
         * ```html
         * <div class="CoveoFieldValue" data-field="@author" data-condition-field-not-documenttype="Case"></div>
         * ```
         * Render the component if the query result item's @documenttype field value is Article, and if its @author field value is anything but Anonymous.
         * ```html
         * <div class="CoveoFieldValue" data-field="@author" data-condition-field-documenttype="Article" data-condition-field-not-author="Anonymous"></div>
         * ```
         * Default value is `undefined`.
         */
        conditions: ComponentOptions.buildFieldConditionOption() 
        };

    constructor(public element: HTMLElement, public options: IShowIfConditionOptions, public bindings: IComponentBindings, public result: IQueryResult) {
        super(element, ShowIfCondition.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, ShowIfCondition, options);
        this.init();
    }

    protected init(){
        if (!FieldsEvaluator.evaluateFieldsToMatch(this.options.conditions, this.result)) {
            Coveo.$$(this.element).hide()
        }
    }
}