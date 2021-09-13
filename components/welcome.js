import TypeIt from 'typeit-react'
import styles from '../styles/Welcome.module.css'

export default function Welcome() {
  return (
    <div className={styles.container}>
      <TypeIt
        className={styles.motto}
        getBeforeInit={instance => {
          instance
            .type('世界上只有一种真正的英雄主义，不存在的')
            .pause(750)
            .delete(4)
            .pause(500)
            .type(
              '就是<br /><em><strong>认清了生活的真相后还依然热爱它！</strong></em>'
            )
          return instance
        }}
      />
    </div>
  )
}
