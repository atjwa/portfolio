const Resume = () => {
    return (
        <div className="resumeSection">
            <a href="/Athan_Walker_Resume.pdf" download>
                Download my resume
            </a>
            <iframe
                src="/Athan_Walker_Resume.pdf"
                title="My resume"
                style={{ width: "100%", height: "80vh", border: 0 }}
            />
        </div>
    );
};

export default Resume;
