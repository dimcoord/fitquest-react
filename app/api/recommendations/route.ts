// app/api/generate-exercises/route.js
// NO CHANGES NEEDED HERE!
import { NextResponse, type NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const characterData = await request.json();

  const prompt = `
    Based on the following video game character profile, create a personalized, easy, and time efficient exercise routine.
    The user wants three simple, unique, and clear recommendations.
    Return the response as a JSON object with four keys which are arrays of strings, those keys are:
    - "title" 10-20 characters long.
    - "description" 10-35 characters long.
    - "duration" the estimated duration in minutes. 1-2 characters long.
    - "calories" the estimated burned calories. 1-4 characters long.

    Character Profile:
    - BMI: ${characterData.bmi}
    - Height: ${characterData.height} cm
    - Weight: ${characterData.weight} kg
    - Age: ${characterData.age} years old
  `;

  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`, // Your key is safe here!
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a helpful fitness assistant for gamers.' },
          { role: 'user', content: prompt },
        ],
        response_format: { type: 'json_object' },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`DeepSeek API error: ${response.status} ${errorBody}`);
    }

    const result = await response.json();
    const exercisePlanText = result.choices[0].message.content;
    const exercisePlanJson = JSON.parse(exercisePlanText);
    console.log(exercisePlanJson);

    // Send the clean, final JSON back to Godot
    return NextResponse.json(exercisePlanJson);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to generate exercise plan.' }, { status: 500 });
  }
}