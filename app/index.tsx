import React, { useState } from 'react';
import { Link } from 'expo-router';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { TextInput } from 'react-native';

const index = () => {
    const [view, setView] = useState("signup");

    const signupUser = async () => {
        alert("signup")
    }

    const loginUser = async () => {
        alert("Login")
    }

    return (
        <ThemedView className="space-y-10 h-full">
            <ThemedView className="space-y-6">
                <ThemedText className="font-extrabold text-4xl">College<ThemedText className="font-extralight text-4xl">One</ThemedText></ThemedText>
                <ThemedText className="">Manage student profiles, streamline student onboarding, handle leave applications, fee submissions, and various other student-related processes.</ThemedText>
            </ThemedView>

            {view == "signup" && (
                <ThemedView className="space-y-6">
                    <ThemedText className="font-extrabold text-4xl relative bottom-2">Signup</ThemedText>
                    <ThemedView>
                        <ThemedText className='mb-2'>College Email</ThemedText>
                        <TextInput
                            placeholder="name.22b0120978@abes.ac.in"
                            placeholderTextColor="gray"
                            className="text-black border border-white rounded-md p-2 bg-neutral-200 text-xl"
                            style={{ textAlignVertical: 'center' }}
                        />
                    </ThemedView>
                    <ThemedView>
                        <ThemedText className='mb-2'>Password</ThemedText>
                        <TextInput
                            secureTextEntry
                            placeholder="Top Secret 🤫"
                            placeholderTextColor="gray"
                            className="text-black border border-white rounded-md p-2 bg-neutral-200 text-xl"
                            style={{ textAlignVertical: 'center' }}
                        />
                    </ThemedView>
                    <ThemedView className="items-center">
                        <ThemedView  className="bg-neutral-200 text-black  px-6 py-3 rounded-md w-full text-lg">
                            <ThemedText onPress={signupUser} className='text-black text-center font-bold'>Signup</ThemedText>
                        </ThemedView>
                    </ThemedView>
                    <ThemedView>
                        <ThemedText className="text-center">
                            Already have an account? <ThemedText onPress={() => setView("login")} className="text-blue-500 underline">Login.</ThemedText>
                        </ThemedText>
                    </ThemedView>
                </ThemedView>
            )}

            {view == "login" && (
                <ThemedView className="space-y-6">
                    <ThemedText className="font-extrabold text-4xl relative bottom-2">Login</ThemedText>
                    <ThemedView>
                        <ThemedText className='mb-2'>College Email</ThemedText>
                        <TextInput
                            placeholder="name.22b0120978@abes.ac.in"
                            placeholderTextColor="gray"
                            className="text-black border border-white rounded-md p-2 bg-neutral-200 text-xl"
                            style={{ textAlignVertical: 'center' }}
                        />
                    </ThemedView>
                    <ThemedView>
                        <ThemedText className="mb-2">Password</ThemedText>
                        <TextInput
                            secureTextEntry
                            placeholder="Top Secret 🤫"
                            placeholderTextColor="gray"
                            className="text-black border border-white rounded-md p-2 bg-neutral-200 text-xl"
                            style={{ textAlignVertical: 'center' }}
                        />
                    </ThemedView>
                    <ThemedView className="items-center">
                        <ThemedView className="bg-neutral-200 text-black  px-6 py-3 rounded-md w-full text-lg">
                            <ThemedText onPress={loginUser} className='text-black text-center font-bold'>Login</ThemedText>
                        </ThemedView>
                    </ThemedView>
                    <ThemedView>
                        <ThemedText className="text-center">
                            Don't have an account? <ThemedText onPress={() => setView("signup")} className="text-blue-500 underline">Signup.</ThemedText>
                        </ThemedText>
                    </ThemedView>
                </ThemedView>
            )}
        </ThemedView>
    );
};

export default index;
