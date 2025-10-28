import '../public/profileCard.css';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <h1 className='profile-name'>Kiersten Foulk</h1>
            <img
                src="../kfLogo.png"
                alt="Profile picture"
                className="profile-image"
            />
            <div className="social-links">
            {/* LinkedIn */}
            <a 
                href="https://www.linkedin.com/in/kiersten-foulk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
            >
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
                    alt="LinkedIn Logo" 
                    className="social-logo" 
                />
            </a>

            {/* GitHub */}
            <a 
                href="https://github.com/kafoulk/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
            >
                <img 
                    src="https://cdn-icons-png.freepik.com/512/25/25231.png" 
                    alt="GitHub Logo" 
                    className="social-logo" 
                />
            </a>

            {/* Behance */}
            <a 
                href="https://www.behance.net/kierstenfoulk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
            >
                <img 
                    src="https://www.svgrepo.com/show/26278/behance-logo.svg" 
                    alt="Behance Logo" 
                    className="social-logo" 
                />
            </a>
        </div>
            <p className="profile-bio">
                A passionate beginner full-stack developer eager to build accessible, efficient and aesthetic web applications. Currently learning the framework "React", which is demonstrated in this project. 
                <br></br>Thanks for taking the time to view!
            </p>
            <div className="favorites-section">
                <h3>Favorite Things</h3>
                <ul>
                    <li>Adventure sports</li>
                    <li>Traveling</li>
                    <li>Animals & nature</li>
                    <li>Learning & trying new things</li>
                </ul>
            </div>
        </div>
    );
};
export default ProfileCard;