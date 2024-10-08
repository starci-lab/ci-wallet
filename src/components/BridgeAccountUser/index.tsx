"use client"

import { useBridgeTransferFormik } from "@/hooks"
import { StoredAccount, useAppSelector } from "@/redux"
import { createAccount } from "@/services"
import { truncateString } from "@/utils"
import { Card, CardBody, User, CheckboxIcon } from "@nextui-org/react"
import React from "react"

interface BridgeAccountUserProps {
    account: StoredAccount
    accountNumber: number
    targetChainKey: string
}

export const BridgeAccountUser = ({account: { imageUrl, name }, accountNumber, targetChainKey}: BridgeAccountUserProps) => {
    const mnemonic = useAppSelector(state => state.authReducer.mnemonic)

    const { address } = createAccount({
        accountNumber,
        mnemonic,
        chainKey: targetChainKey
    })
    
    const formik = useBridgeTransferFormik()

    return (
        <Card classNames={{
            base: "!bg-transparent"
        }} disableRipple isPressable onPress={() => formik.setFieldValue("targetAccountNumber", accountNumber)} fullWidth shadow="none">
            <CardBody className="px-3 py-2">
                <div className="flex justify-between items-center w-full">
                    <User
                        avatarProps={{
                            src: imageUrl
                        }}
                        name={
                            <div className="flex gap-1 text-sm items-center">
                                <div>{name}</div>
                                <div className="text-primary">{`[${accountNumber}]`}</div>
                            </div>
                        }
                        description={
                            truncateString(address)
                        }/>
                    <CheckboxIcon isSelected={formik.values.targetAccountNumber === accountNumber} className="w-3"/>
                </div>   
            </CardBody>
        </Card>
    )
}