import { NextResponse } from "next/server";

export async function GET() {
  const username = process.env.LEETCODE_USERNAME || "AbhisHack";

  // Fallback mock statistics if username is empty or placeholder
  if (!username || username === "[Placeholder]" || username.toLowerCase() === "placeholder") {
    return NextResponse.json({
      profile: {
        username: "abhishekthummar",
        ranking: 85241,
        contestRating: 1680,
        contestTopPercent: 12.5,
      },
      solved: {
        total: 320,
        easy: 150,
        medium: 135,
        hard: 35,
        totalQuestions: 3100,
      },
      beats: {
        easy: 78.4,
        medium: 82.1,
        hard: 91.3,
      },
    });
  }

  // GraphQL query for LeetCode
  const query = `
    query userSessionProgress($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        profile {
          ranking
          reputation
        }
      }
      userContestRanking(username: $username) {
        rating
        topPercentage
      }
    }
  `;

  try {
    const res = await fetch("https://leetcode.com/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query,
        variables: { username },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("LeetCode API returned an error");
    const data = await res.json();
    
    if (data.errors) {
      throw new Error(data.errors[0].message || "GraphQL error");
    }

    const matchedUser = data.data.matchedUser;
    if (!matchedUser) throw new Error("User not found on LeetCode");

    const acSubmissionNum = matchedUser.submitStats.acSubmissionNum;
    const ranking = matchedUser.profile.ranking;
    const contestRating = data.data.userContestRanking?.rating || 0;
    const contestTopPercent = data.data.userContestRanking?.topPercentage || 0;

    const easySolved = acSubmissionNum.find((x: { difficulty: string; count: number }) => x.difficulty === "Easy")?.count || 0;
    const mediumSolved = acSubmissionNum.find((x: { difficulty: string; count: number }) => x.difficulty === "Medium")?.count || 0;
    const hardSolved = acSubmissionNum.find((x: { difficulty: string; count: number }) => x.difficulty === "Hard")?.count || 0;

    return NextResponse.json({
      profile: {
        username,
        ranking,
        contestRating: Math.round(contestRating),
        contestTopPercent,
      },
      solved: {
        total: easySolved + mediumSolved + hardSolved,
        easy: easySolved,
        medium: mediumSolved,
        hard: hardSolved,
        totalQuestions: 3100,
      },
      beats: {
        easy: 75.0,
        medium: 80.0,
        hard: 85.0,
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        error: errorMessage,
        // Return fallback data on network failure to avoid breaking the UI
        profile: {
          username: username || "abhishekthummar",
          ranking: 104230,
          contestRating: 1540,
          contestTopPercent: 18.2,
        },
        solved: {
          total: 184,
          easy: 92,
          medium: 76,
          hard: 16,
          totalQuestions: 3100,
        },
        beats: {
          easy: 65,
          medium: 70,
          hard: 75,
        },
      },
      { status: 200 }
    );
  }
}
