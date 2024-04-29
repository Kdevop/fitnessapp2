import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { counts } from '../utils/data';
import CountsCard from '../components/cards/countscard';
import WeeklyStat from '../components/cards/weeklystat';
import CategoryChart from '../components/cards/categorychart';
import AddWorkout from '../components/addworkout';
import WorkoutCard from "../components/cards/workoutcard";
import { addWorkout, getDashboardDetails, getWorkouts } from '../Api/index'
import { ConstructionOutlined } from "@mui/icons-material";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;
const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [todaysWorkouts, setTodaysWorkouts] = useState([]);
  const [workout, setWorkout] = useState([`#Legs
  Squat
  5 sets X 15 reps
  30kg
  30min`]);

  const dashboardData = async() => {
    setLoading(true)
    const token = localStorage.getItem("fittrack-app-token")
    await getDashboardDetails(token).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }; 

  useEffect(() => {
    dashboardData();
    
  }, []);

  // old mock data!
  // const [workout, setWorkout] = useState('')
  //   const [buttonLoading, setButtonLoading] = useState(false)
  //   const data = {
  //       totalCaloriesBurnt: 13500,
  //       totalWorkouts: 6,
  //       avgCaloriesBurntPerWorkout: 2250,
  //       totalWeeksCaloriesBurnt: {
  //           weeks: ['17th', '18th', '19th', '20th', '21st', '22nd', '23rd'],
  //           caloriesBurned: [10500, 0, 0, 0, 0, 0, 13500]
  //       },
  //       pieChartData: [
  //           {
  //               'id': 0,
  //               'value': 6000,
  //               'label': 'Legs'
  //           },
  //           {
  //               'id': 1,
  //               'value': 1500,
  //               'label': 'Back'
  //           },
  //           {
  //               'id': 2,
  //               'value': 3750,
  //               'label': 'Shoulder'
  //           },
  //           {
  //               'id': 3,
  //               'value': 2250,
  //               'label': 'Abs'
  //           },
  //       ]
  //   }


    return (
        <Container>
            <Wrapper>
                <Title>Dashboard</Title>
                <FlexWrap>
                    {counts.map((item) => (<CountsCard item={item} data={data} />))}
                </FlexWrap>
                <FlexWrap>
                    <WeeklyStat data={data} />
                    <CategoryChart data={data} />
                    <AddWorkout workout={workout} setWorkout={setWorkout} />
                </FlexWrap>
                <Section>
                <Title>Todays Workouts</Title>
                    <CardWrapper>
                        <WorkoutCard />
                        <WorkoutCard />
                        <WorkoutCard />
                        <WorkoutCard />
                    </CardWrapper>
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Dashboard;