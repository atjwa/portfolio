export const PageNames = {
    Education: 'Education',
    Experience: 'Experience',
    Overview: 'Overview',
    Skills: 'Skills',
};

export type PageName = (typeof PageNames)[keyof typeof PageNames];

export default PageNames;
