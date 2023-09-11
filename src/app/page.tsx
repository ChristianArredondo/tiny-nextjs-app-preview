import mongoClientPromise from '@/services/mongodb';
import styles from './page.module.css'

export default async function Home() {
  const mongoClient = await mongoClientPromise;
  const db = mongoClient.db();
  console.log('Connected to MongoDB');
  console.log('DB name: ', db.databaseName);
  
  return (
    <main className={styles.main}>
      <div>
        Hello. Tiny NextJS app is up and running :)
      </div>
    </main>
  );
}
