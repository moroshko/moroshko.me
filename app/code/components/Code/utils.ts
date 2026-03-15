export const getRepoUrl = (repoName: string) => {
  return `https://github.com/moroshko/${repoName}`;
};

export const getRepoData = async (
  repoName: string,
): Promise<{ stars: number | null }> => {
  const response = await fetch(
    `https://api.github.com/repos/moroshko/${repoName}`,
    {
      headers: {
        Authorization: process.env.GITHUB_PERSONAL_ACCESS_TOKEN ?? "",
      },
    },
  );

  if (!response.ok) {
    console.error(`Failed to fetch moroshko/${repoName}`, response.statusText);

    return {
      stars: null,
    };
  }

  const data = await response.json();

  return {
    stars: data.stargazers_count,
  };
};
