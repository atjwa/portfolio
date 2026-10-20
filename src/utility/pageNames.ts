export const PageNames = {
    Education: 'Education',
    Experience: 'Experience',
    Highlights: 'Highlights',
    Skills: 'Skills',
};

export type PageName = (typeof PageNames)[keyof typeof PageNames];

export default PageNames;
