"use client"

import {Box, Grid, Button, Paper} from "@mui/material"
import {useState} from "react";

const unauthenticatedRequestUnauthenticatedFile = async (setError: (e: string) => void) => {
  try {
    let res = await fetch("http://127.0.0.1:3000/api/director")

    setError(
        `Request URL: ${res.url}\n` +
        `Headers: ${JSON.stringify([...res.headers.entries()])}\n` +
        `Status: ${res.status}\n` +
        `Content: ${await res.text()}`
    )

  } catch (e) {
    setError((e as Error).message)
  }
}

const unauthenticatedRequest = async (setError: (e: string) => void) => {
  try {
    let res = await fetch("http://127.0.0.1:3000/api/auth/director")

    console.log(res)

    if(res.status === 401) {
      setError(
          `Unauthenticated Request\n` +
          `Request URL: ${res.url}\n` +
          `Headers: ${JSON.stringify([...res.headers.entries()])}\n` +
          `Status: ${res.status}\n`
      )
    }
  } catch (e) {
    setError((e as Error).message)
  }
}

const unauthenticatedRequestNoRedirect = async (setError: (e: string) => void) => {
  try {
    let res = await fetch("http://127.0.0.1:3000/api/auth/director?redirect=false")

    setError(
        `Unauthenticated Request\n` +
        `Request URL: ${res.url}\n` +
        `Headers: ${JSON.stringify([...res.headers.entries()])}\n` +
        `Status: ${res.status}\n`
    )

  } catch (e) {
    setError((e as Error).message)
  }
}

const authenticatedRequestDirector = async (setError: (e: string) => void) => {
  try {
    let res = await fetch(
        "http://127.0.0.1:3000/api/auth/director",
        {
          method: "GET",
          headers: {
            "Authorization": "Bearer 1234"
          }
        }
    )

    setError(
        `Request URL: ${res.url}\n` +
        `Headers: ${JSON.stringify([...res.headers.entries()])}\n` +
        `Status: ${res.status}\n` +
        `Content: ${await res.text()}`
    )

  } catch (e) {
    setError((e as Error).message)
  }
}

const authenticatedRequest = async (setError: (e: string) => void) => {
  try {
    let res = await fetch(
        "http://127.0.0.1:3000/api/auth/file",
        {
          method: "GET",
          headers: {
            "Authorization": "Bearer 1234"
          }
        }
    )

    setError(
        `Request URL: ${res.url}\n` +
        `Headers: ${JSON.stringify([...res.headers.entries()])}\n` +
        `Status: ${res.status}\n` +
        `Content: ${await res.text()}`
    )

  } catch (e) {
    setError((e as Error).message)
  }
}

export default function Home() {

  const [error, setError] = useState<string>("");

  return (
    <main>
      <Box>
        This page demonstrates the process of making a authenticated request to another domain. This page runs
        on localhost but is making requests to 127.0.0.1.
      </Box>
      <Paper elevation={error ? 2 : 0}>
        <Box as={"pre"} p={1} textOverflow={"break"}>
          {error}
        </Box>
      </Paper>
      <Grid container>
        <Grid item xs={12}>
          <Box p={2}>
            <Button onClick={() => unauthenticatedRequestUnauthenticatedFile(setError)}>
              Make an Unauthenticated Request to the Director for Unauthenticated File
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <Button onClick={() => unauthenticatedRequest(setError)}>
              Make an Unauthenticated Request to the Director
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <Button onClick={() => unauthenticatedRequestNoRedirect(setError)}>
              Make an Unauthenticated Request to the Director no Redirect
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <Button onClick={() => authenticatedRequestDirector(setError)}>
              Make an Authenticated Request to the Director
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <Button onClick={() => authenticatedRequest(setError)}>
              Make an Authenticated Request to the File
            </Button>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}
