import styles from'../styles/components/Profile.module.css';


export function Profile(){
    return(
        <div className={styles.profileContainer} >
            <img src="https://avatars0.githubusercontent.com/u/60299840?s=400&u=975217360b1d0c7a730b3ef163560a420ca40594&v=4" alt="Leonardo Vinicius"/>
            <div>
                <strong>Leonardo Vinicius</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    level 1
                </p>
            </div>
        
        </div>
    );
}