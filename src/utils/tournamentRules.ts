/**
 * Pure calculation and validation logic for "ХУРД CUP-2026" tournament rules.
 */

export const BASE_REGISTRATION_FEE = 1500000;
export const ADDITIONAL_TEAM_FEE = 500000;

export function calculateTotalFee(additionalTeamsCount: number): number {
  const safeCount = Math.max(0, Math.floor(additionalTeamsCount || 0));
  return BASE_REGISTRATION_FEE + safeCount * ADDITIONAL_TEAM_FEE;
}

export function formatMNT(amount: number): string {
  return amount.toLocaleString('en-US');
}

export function validateBasketballRoster(count: number): { isValid: boolean; requiredRange: string } {
  return {
    isValid: count >= 7 && count <= 8,
    requiredRange: "7-8"
  };
}

export interface PlayerEligibilityInput {
  isEmployeeOrContractor: boolean;
  hasNationalTopLeague: boolean;
  devLeagueCountInTeam: number;
  hasSocialInsuranceLast3Months: boolean;
}

export function validatePlayerEligibility(input: PlayerEligibilityInput): {
  isEligible: boolean;
  violations: string[];
} {
  const violations: string[] = [];

  if (!input.isEmployeeOrContractor) {
    violations.push("4.1 Байгууллагын үндсэн ажилтан болон гэрээт албан хаагч биш");
  }

  if (input.hasNationalTopLeague) {
    violations.push("4.2.6 Үндэсний сагсан бөмбөгийн дээд лиг-т тоглодог тамирчин");
  }

  if (input.devLeagueCountInTeam > 2) {
    violations.push("4.2.7 M-хөгжлийн лиг-т тоголдог тамирчин багт 2-оос илүү байх боломжгүй");
  }

  if (!input.hasSocialInsuranceLast3Months) {
    violations.push("4.2.8 Нийгмийн даатгал төлөгдөөгүй (сүүлийн 3 сар E-Mongolia)");
  }

  return {
    isEligible: violations.length === 0,
    violations
  };
}

export function getMatchDuration(isFinal: boolean, gender: 'male' | 'female'): {
  durationMinutes: number;
  timeType: 'бохир цаг' | 'цэвэр цаг';
} {
  if (isFinal) {
    return {
      durationMinutes: gender === 'male' ? 8 : 7,
      timeType: 'цэвэр цаг'
    };
  }

  return {
    durationMinutes: gender === 'male' ? 7 : 6,
    timeType: 'бохир цаг'
  };
}
