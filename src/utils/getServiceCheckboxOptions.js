/*
 * This function is used to get the avaliable options for a given business service
 * @flow
 */

export default function getServiceCheckboxOptions(businessType: string): Array<string> {
  // This is card-coded for now, but this should probably be altered to import this data from JSON
  // (or elsewhere...)
  switch (businessType.toLowerCase()) {
    case 'agriculture':
      return ['Identify pests', 'Detect nutrient deficiencies', 'Estimate crop yield', 'Measure irrigation'];
    case 'infrastructure':
      return ['Heating leak', 'Damages', 'Surface estimation', 'Solar estimation'];
    default:
      return [];
  }
}
