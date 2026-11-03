const PageNames = {
    Education: 'Education',
    Experience: 'Experience',
    Overview: 'Overview',
    Skills: 'Skills',
    Resume: 'Resume',
};

export type PageName = (typeof PageNames)[keyof typeof PageNames];

export default PageNames;
