import { useState } from "react";
import styled from "styled-components";

export default function Transaction({ id, date, description, type, value }) {


    return (
        <Line>
            <div className="description">
                <span className="date">{date}</span>
                <span>{description}</span>
            </div>
            <div className={"value " + (type === "credit" ? "credit": "debit")}>
                {value}
            </div>
        </Line>
    );
}

const Line = styled.div`
    width: 95%;
    height: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px auto 15px auto;
    font-size: 16px;
    line-height: 19px;

    .description{
        width: 70%;

        span{
            margin-right: 6px;
        }

        .date{
            color: #C6C6C6;
        }
    }

    .value{
        width: 20%;
    }

    .value.credit{
        color: #03AC00;
    }

    .value.debit{
        color: #C70000;
    }
`;