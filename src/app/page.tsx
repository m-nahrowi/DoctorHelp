'use client'
import TopHeader from "@/components/top-header";
// import { ChatContextProvider } from "@/contexts/chat-context";
import { ConfigContextProvider } from "@/contexts/config-context";
import {  DatabaseContextProvider } from "@/contexts/db-context";
import { PatientContextProvider } from "@/contexts/patient-context";
//import { PatientRecordContextProvider } from "@/contexts/patient-record-context";
import AuthorizationGuard from "@/components/authorization-guard";
import { PatientRecordContextProvider } from "@/contexts/patient-record-context";
import { ChatContextProvider } from "@/contexts/chat-context";
import PatientRecordsWrapper from "@/components/patient-records-wrapper";
import { KeyContextProvider } from "@/contexts/key-context";


export default function PatientPad() {
  return (
    <DatabaseContextProvider>
      <ConfigContextProvider>
        <AuthorizationGuard>
         <ChatContextProvider>
          <PatientContextProvider>
              <PatientRecordContextProvider>
                <KeyContextProvider>
                  <div>
                    <TopHeader />
                    <PatientRecordsWrapper />
                  </div>
                </KeyContextProvider>
              </PatientRecordContextProvider>
            </PatientContextProvider>
          </ChatContextProvider>
        </AuthorizationGuard> 
      </ConfigContextProvider>
    </DatabaseContextProvider>
  );
}