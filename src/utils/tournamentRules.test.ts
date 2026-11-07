import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateTotalFee,
  formatMNT,
  validateBasketballRoster,
  validatePlayerEligibility,
  getMatchDuration,
  getAllSports,
  getSportInfo,
  BASE_REGISTRATION_FEE,
  ADDITIONAL_TEAM_FEE
} from './tournamentRules.ts';

test('calculateTotalFee calculates base and additional teams correctly', () => {
  assert.equal(calculateTotalFee(0), BASE_REGISTRATION_FEE);
  assert.equal(calculateTotalFee(1), BASE_REGISTRATION_FEE + ADDITIONAL_TEAM_FEE);
  assert.equal(calculateTotalFee(2), 2500000);
  assert.equal(calculateTotalFee(-1), BASE_REGISTRATION_FEE);
});

test('formatMNT formats currency numbers with thousands separators', () => {
  assert.equal(formatMNT(1500000), '1,500,000');
  assert.equal(formatMNT(500000), '500,000');
  assert.equal(formatMNT(2000000), '2,000,000');
});

test('validateBasketballRoster requires 7-8 members', () => {
  assert.equal(validateBasketballRoster(6).isValid, false);
  assert.equal(validateBasketballRoster(7).isValid, true);
  assert.equal(validateBasketballRoster(8).isValid, true);
  assert.equal(validateBasketballRoster(9).isValid, false);
});

test('validatePlayerEligibility enforces tournament rules strictly', () => {
  const validPlayer = {
    isEmployeeOrContractor: true,
    hasNationalTopLeague: false,
    devLeagueCountInTeam: 1,
    hasSocialInsuranceLast3Months: true
  };
  const resultValid = validatePlayerEligibility(validPlayer);
  assert.equal(resultValid.isEligible, true);
  assert.equal(resultValid.violations.length, 0);

  const topLeaguePlayer = {
    ...validPlayer,
    hasNationalTopLeague: true
  };
  const resultPro = validatePlayerEligibility(topLeaguePlayer);
  assert.equal(resultPro.isEligible, false);
  assert.match(resultPro.violations[0], /дээд лиг/);

  const noInsurancePlayer = {
    ...validPlayer,
    hasSocialInsuranceLast3Months: false
  };
  const resultNoInsurance = validatePlayerEligibility(noInsurancePlayer);
  assert.equal(resultNoInsurance.isEligible, false);
  assert.match(resultNoInsurance.violations[0], /Нийгмийн даатгал/);
});

test('getMatchDuration returns correct minutes and clock type', () => {
  assert.deepEqual(getMatchDuration(false, 'male'), {
    durationMinutes: 7,
    timeType: 'бохир цаг'
  });
  assert.deepEqual(getMatchDuration(false, 'female'), {
    durationMinutes: 6,
    timeType: 'бохир цаг'
  });
  assert.deepEqual(getMatchDuration(true, 'male'), {
    durationMinutes: 8,
    timeType: 'цэвэр цаг'
  });
  assert.deepEqual(getMatchDuration(true, 'female'), {
    durationMinutes: 7,
    timeType: 'цэвэр цаг'
  });
});

test('getAllSports returns exactly basketball, darts, and tennis equally', () => {
  const sports = getAllSports();
  assert.equal(sports.length, 3);
  const ids = sports.map(s => s.id);
  assert.ok(ids.includes('basketball'));
  assert.ok(ids.includes('darts'));
  assert.ok(ids.includes('tennis'));
});

