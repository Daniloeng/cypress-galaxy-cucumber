export const expectedTextsOnAdvancedAssetFilter = [
    '35',
    'RUA MARIA MARGARIDA MESQUITA LOTE 11 3 ESQUERDO, URB.CHESGAL',
    'J',
    'LAGOS',
    'GE Consumer Finance, I.F.I.C., Instituição Financeira de Crédito, S.A.',
    'PP-0798-25168-080706-001679',
    'LAGOS (SÃO SEBASTIÃO) (EXTINTA)',
    'MORTGAGE',
    '02-P01-000129',
    'Judicial Sale - Repossession',
    'CLOSED',
    '2014-08-05',
    '5084',
    'Flat'
];

export const expectedTextsWhenAddClaimedDebts = [
    {
        assetId: '17',
        type: 'Townhouse',
        debts: '386617',
        expectedAmountToReceive: '€ 500.00',
        previousAssetIdentifier: 'E4-P01-000186',
        assetStatus: 'CLAIM',
        assetStatusReason: '',
        portfolioManagementPhase: '',
        businessPlanValue: '€ 40,000.00',
        businessPlanValueDate: '2023-09-25',
        portion: '100',
        registrationOffice: 'Mangualde CRP',
        registrationOfficeNumber: '173',
        taxOfficeNumber: '501',
        taxOfficeFraction: ''
    }
];

export const editedExpectedTextsWhenAddClaimedDebts = [
    {
        assetId: '17',
        type: 'Townhouse',
        debts: '386617',
        expectedAmountToReceive: '€ 200.00',
        previousAssetIdentifier: 'E4-P01-000186',
        assetStatus: 'CLAIM',
        assetStatusReason: '',
        portfolioManagementPhase: '',
        businessPlanValue: '€ 40,000.00',
        businessPlanValueDate: '2023-09-25',
        portion: '100',
        registrationOffice: 'Mangualde CRP',
        registrationOfficeNumber: '173',
        taxOfficeNumber: '501',
        taxOfficeFraction: ''
    }
];