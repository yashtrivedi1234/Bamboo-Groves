export type EventType = 'corporate' | 'social';

const parsePortfolioIdList = (rawValue: string | undefined) => {
  if (!rawValue) {
    return [];
  }

  return rawValue
    .split(',')
    .map((value) => Number(value.trim()))
    .filter((value) => Number.isInteger(value) && value > 0);
};

const socialPortfolioIds = parsePortfolioIdList(import.meta.env.VITE_SOCIAL_PORTFOLIO_IDS);
const corporatePortfolioIds = parsePortfolioIdList(import.meta.env.VITE_CORPORATE_PORTFOLIO_IDS);

export const getEventTypeFromPortfolioId = (portfolioId: number): EventType => {
  if (socialPortfolioIds.includes(portfolioId)) {
    return 'social';
  }

  if (corporatePortfolioIds.includes(portfolioId)) {
    return 'corporate';
  }

  // Default mapping for current app data: id 2 is social, everything else is corporate.
  return portfolioId === 2 ? 'social' : 'corporate';
};

export const getPostVerificationRoute = (portfolioId: number) => {
  const eventType = getEventTypeFromPortfolioId(portfolioId);
  return eventType === 'social' ? '/events/social' : '/corporate-profile';
};
