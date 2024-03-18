import React from "react"
import styles from "./register.css"
const register = (props) => {
  return (
    <div className={styles['frame']}>
      <div className={styles['frame01']}>
        <img
          src="./eco.png"
          alt="frame"
          width={712}
          height={1080}
          className={styles['frame02']}
          />
        <div className={styles['frame03']}>
          <div className={styles['frame04']}>
            <div className={styles['frame05']}>
              <div className={styles['frame06']}>
                <div className={styles['text']}>
                  <p className={styles['text01']}>Register</p>
                </div>
              </div>
              <div className={styles['text02']}>
                <p className={styles['text03']}>
                  Let’s Create your Swap Account !
                </p>
              </div>
            </div>
            <img
              src="./swap.png"
              alt="vector"
              width={110.500244140625}
              height={100.3638916015625}
              className={styles['vector']}
              />
            <div className={styles['frame07']}>
              <div className={styles['text04']}>
                <p className={styles['text05']}>Username</p>
              </div>
              <div className={styles['frame08']}>
                <div className={styles['text06']}>
                  <p className={styles['text07']}>Your Password</p>
                </div>
              </div>
            </div>
            <div className={styles['frame09']}>
              <div className={styles['text08']}>
                <p className={styles['text09']}>Email</p>
              </div>
              <div className={styles['frame10']}>
                <div className={styles['text10']}>
                  <p className={styles['text11']}>Your Email Address</p>
                </div>
              </div>
            </div>
            <div className={styles['frame11']}>
              <div className={styles['text12']}>
                <p className={styles['text13']}>Location</p>
              </div>
              <div className={styles['frame12']}>
                <div className={styles['text14']}>
                  <p className={styles['text15']}>Indonesia</p>
                </div>
                <img
                  src="./assets/516447.svg"
                  alt="frame"
                  width={24.000019073486328}
                  height={16}
                  className={styles['frame13']}
                  />
              </div>
            </div>
            <div className={styles['frame14']}>
              <div className={styles['text16']}>
                <p className={styles['text17']}>Password</p>
              </div>
              <div className={styles['frame15']}>
                <div className={styles['text18']}>
                  <p className={styles['text19']}>Your Password</p>
                </div>
              </div>
            </div>
            <div className={styles['frame16']}>
              <div className={styles['text20']}>
                <p className={styles['text21']}>Sign Up</p>
              </div>
            </div>
            <img
              src="./id.png"
              alt="frame"
              width={558}
              height={3}
              className={styles['frame17']}
              />
            <div className={styles['frame18']}>
              <img
                src="./google.png"
                alt="instance"
                width={24}
                height={24.101776123046875}
                className={styles['instance']}
                />
              <div className={styles['text22']}>
                <p className={styles['text23']}>Continue with Google</p>
              </div>
            </div>
            <div className={styles['frame19']}>
              <img
                src="./facebook.png"
                alt="instance"
                width={24}
                height={24}
                className={styles['instance1']}
                />
              <div className={styles['text24']}>
                <p className={styles['text25']}>Continue with Facebook</p>
              </div>
            </div>
            <div className={styles['text26']}>
              <p className={styles['text27']}>
                <span className={styles['text28']}>
                  Already have an account?
                    </span>
                    <span className={styles['text29']}>Log In</span>
                    </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    )
                    }

export default register