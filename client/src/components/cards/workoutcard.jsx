import { FitnessCenterRounded, TimelapseRounded } from '@mui/icons-material';
import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    flex: 1;
    min-wdith: 250px;
    max-width: 400px;
    padding: 16px 18px;
    border: 1px solid ${({ theme }) => theme.text_primary + 20};
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    @media (max-width: 600px) {
        padding 12px 14px;
    }
`;

const Category = styled.div`
    width: fit-content;
    font-size: 14px;
    font-size: 14px;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    background: 4px 10px;
    border-radius: 8px;
`;

const Name = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
`;

const Sets = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
    font-weight: 500;
    display: flex;
    gap: 6px;
`;

const Flex = styled.div`
    display: felx;
    gap: 16px;
`;

const Details = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    display: flex;
    align-items: centerl
    gap: 6px;
`;



const WorkoutCard = () => {
    return (
        <Card>
            <Category>#Legs</Category>
            <Name>Squat</Name>
            <Sets>
                Count: 5 sets X 10 reps
            </Sets>
            <Flex>
                <Details>
                    <FitnessCenterRounded sx={{fontSice: '20px'}} />
                    30kg
                </Details>
                <Details>
                    <TimelapseRounded sx={{fontSice: '20px'}} />
                    30kg
                </Details>
            </Flex>
        </Card>
    )
}

export default WorkoutCard; 