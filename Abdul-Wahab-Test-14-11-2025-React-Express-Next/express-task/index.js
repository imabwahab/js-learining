import express from 'express'
import tasksRouter from './routes/tasks.js'
import projectRouer from './routes/projects.js'
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors());


app.use('/api', projectRouer);
app.use('/api/company', tasksRouter);

app.listen(7000, () => {
  console.log(`server is running at http://localhost:7000`)
});