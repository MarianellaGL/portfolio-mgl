"use client";
import { useEffect, useState } from "react";
import { Octokit } from "@octokit/rest";

type UseOctokitFetchOptions = {
  username: string;
  accessToken: string;
};
const useOctokitFetch = (options: UseOctokitFetchOptions) => {
  const [data, setData] = useState<Array<any>>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      const octokit = new Octokit({
        auth: options.accessToken
      });

      setIsLoading(true);

      try {
        const response = await octokit.rest.repos.listForUser({
          username: options.username,
        });
        setData(response.data);
      } catch (err: any) {
        console.error("Error fetching repositories:", err);
        setError(err.message || "Error fetching data");
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useOctokitFetch;
