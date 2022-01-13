
import { IFieldsToMatch, IQueryResult } from 'coveo-search-ui';
import { each, find } from 'underscore';

export class FieldsEvaluator {
  public static evaluateFieldsToMatch(toMatches: IFieldsToMatch[], result: IQueryResult): boolean {
    let isMatching = true;
    if (!toMatches) return true;
    each(toMatches, (toMatch: IFieldsToMatch) => {
      let matchAtLeastOnce = false;
      if (!toMatch.values) {
        matchAtLeastOnce = result.raw[toMatch.field] != null;
      } else {
        each(toMatch.values, value => {
          if (!matchAtLeastOnce) {
            const fieldValue: string | string[] = result.raw[toMatch.field];
            const fieldValues = FieldsEvaluator.getFieldValueAsArray(fieldValue);
            matchAtLeastOnce = FieldsEvaluator.isMatch(fieldValues, value);
          }
        });
      }
      isMatching = isMatching && (toMatch.reverseCondition ? !matchAtLeastOnce : matchAtLeastOnce);
    });
    return isMatching;
  }

  private static getFieldValueAsArray(fieldValue: string | string[]): string[] {
    return typeof fieldValue === 'string' ? [fieldValue] : fieldValue;
  }

  private static isMatch(fieldValues: string[], value: string) {
    return find(fieldValues, fieldValue => fieldValue.toLowerCase() == value.toLowerCase()) != undefined;
  }
}