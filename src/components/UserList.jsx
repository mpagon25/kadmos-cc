import { React, useState, useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import UserCard from "./UserCard";
import axios from "axios";
import { configureFonts } from "react-native-paper";

const UserList = (props) => {

    return (
        <>
            {props.userList.map((user, index) => {

                return (
                    <UserCard
					{...props}
						user={user}
                       
                        key={user.id}
                    />
                );
            })}
        </>
    );
};


export default UserList;
