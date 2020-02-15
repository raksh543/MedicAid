package in.codepredators.vedanta.details;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import in.codepredators.vedanta.R;

public class PrescriptionDetails extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setTheme(R.style.LightTheme);
        setContentView(R.layout.prescription_details_actions);
    }
}
