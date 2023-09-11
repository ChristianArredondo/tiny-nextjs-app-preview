import mongoClientPromise from '@/services/mongodb';
import styles from './page.module.css'

export default async function Home() {
  const mongoClient = await mongoClientPromise;
  const initDoc = await mongoClient
    .db()
    .collection('init')
    .findOne();
  
  return (
    <main className={styles.main}>
      <div>
        <p>
          Hello. Tiny NextJS app is up and running :)
        </p>
        <p>{initDoc?.label}</p>
      </div>
    </main>
  );
}
